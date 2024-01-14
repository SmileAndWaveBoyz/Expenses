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
        ]);


        $paymentTerms = $validatedData['paymentTerms'];
        $createdAt = $validatedData['createdAt'];
        
        
        // Calculate paymentDue by adding paymentTerms days to createdAt
        $paymentDue = date('Y-m-d', strtotime($createdAt . ' + ' . $paymentTerms . ' days'));
        
        $validatedData['paymentDue'] = $paymentDue;
        Log::info($validatedData);

        // Create a new invoice
        $invoice = Invoice::create($validatedData);

        Log::info($invoice);
        


        return response()->json(['message' => 'Invoice created successfully']);
    }

    public function index()
    {
        $invoices = Invoice::all();

        return response()->json(['invoices' => $invoices], 200);
    }
}
