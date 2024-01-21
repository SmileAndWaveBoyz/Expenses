<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class InvoiceController extends Controller
{
    public function store(Request $request)
    {
        // Log::info($request);

        $validatedData = $request->validate([
            'clientAddress_city' => 'required|string',
            'clientAddress_country' => 'required|string',
            'clientAddress_postCode' => 'required|string',
            'clientAddress_street' => 'required|string',
            'clientEmail' => 'required|email',
            'clientName' => 'required|string',
            'createdAt' => 'required|date',
            'description' => 'required|string',
            'paymentTerms' => 'required|integer',
            'senderAddress_city' => 'required|string',
            'senderAddress_country' => 'required|string',
            'senderAddress_postCode' => 'required|string',
            'senderAddress_street' => 'required|string',
            'status' => 'required|string',
            'items.*.name' => 'required|string',
            'items.*.quantity' => 'required|integer',
            'items.*.price' => 'required|numeric',
        ]);


        $paymentTerms = $validatedData['paymentTerms'];
        $createdAt = $validatedData['createdAt'];
        
        
        // Calculate paymentDue by adding paymentTerms days to createdAt
        $paymentDue = date('Y-m-d', strtotime($createdAt . ' + ' . $paymentTerms . ' days'));
        
        $validatedData['paymentDue'] = $paymentDue;
        $validatedData['total'] = 0;

        foreach ($validatedData['items'] as $itemData) {
            $validatedData['total'] += $itemData["price"] * $itemData["quantity"];

        }

        $invoiceID = $this->generateUniqueInvoiceID();
        $validatedData['invoiceID'] = $invoiceID;
        
        
        // Create a new invoice
        $invoice = Invoice::create($validatedData);

        // Log::info($invoice);
        
        foreach ($validatedData['items'] as $itemData) {
            $itemData["total"] = $itemData["price"] * $itemData["quantity"];
            $item = new Item($itemData);
            $invoice->items()->save($item);
        }

        return response()->json(['message' => 'Invoice created successfully']);
    }

    public function draft(Request $request)
    {
        $validatedData = $request->validate([
            'clientAddress_city' => '',
            'clientAddress_country' => '',
            'clientAddress_postCode' => '',
            'clientAddress_street' => '',
            'clientEmail' => '',
            'clientName' => '',
            'createdAt' => '',
            'description' => '',
            'paymentTerms' => '',
            'senderAddress_city' => '',
            'senderAddress_country' => '',
            'senderAddress_postCode' => '',
            'senderAddress_street' => '',
            'status' => '',
            'items.*.name' => '',
            'items.*.quantity' => '',
            'items.*.price' => '',
        ]);


        $paymentTerms = $validatedData['paymentTerms'];
        $createdAt = $validatedData['createdAt'];
        
        
        // Calculate paymentDue by adding paymentTerms days to createdAt
        $paymentDue = date('Y-m-d', strtotime($createdAt . ' + ' . $paymentTerms . ' days'));
        
        $validatedData['paymentDue'] = $paymentDue;
        $validatedData['total'] = 0;

        foreach ($validatedData['items'] as $itemData) {
            $validatedData['total'] += $itemData["price"] * $itemData["quantity"];

        }

        $invoiceID = $this->generateUniqueInvoiceID();
        $validatedData['invoiceID'] = $invoiceID;
        
        
        // // Create a new invoice
        $invoice = Invoice::create($validatedData);

        // Log::info($invoice);
        
        foreach ($validatedData['items'] as $itemData) {
            $itemData["total"] = $itemData["price"] * $itemData["quantity"];
            $item = new Item($itemData);
            $invoice->items()->save($item);
        }

        return response()->json(['message' => 'Draft created successfully']);
    }

    public function index()
    {
        $invoices = Invoice::all();

        return response()->json(['invoices' => $invoices], 200);
    }

    private function generateUniqueInvoiceID()
    {
        $letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';

        $randomLetters = $letters[random_int(0, strlen($letters) - 1)] . $letters[random_int(0, strlen($letters) - 1)];
        $randomNumbers = '';

        // Generate four random numbers
        for ($i = 0; $i < 4; $i++) {
            $randomNumbers .= $numbers[random_int(0, strlen($numbers) - 1)];
        }

        $invoiceID = $randomLetters . $randomNumbers;

        // Check if the generated invoiceID is unique, generate a new one if not
        while (Invoice::where('invoiceID', $invoiceID)->exists()) {
            $invoiceID = $this->generateUniqueInvoiceID();
        }

        return $invoiceID;
    }

    public function destroy($id)
    {
        
        try {
            $invoice = Invoice::findOrFail($id);

            // Delete the corresponding items
            $invoice->items()->delete();

            $invoice->delete();

            return response()->json(null, 204); // Respond with a 204 No Content status
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting invoice'], 500);
        }
    }
}
