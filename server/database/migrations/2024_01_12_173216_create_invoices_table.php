<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('createdAt');
            $table->date('paymentDue')->nullable();
            $table->string('description');
            $table->integer('paymentTerms');
            $table->string('clientName');
            $table->string('clientEmail');
            $table->string('status');
            $table->string('senderAddress_street');
            $table->string('senderAddress_city');
            $table->string('senderAddress_postCode');
            $table->string('senderAddress_country');
            $table->string('clientAddress_street');
            $table->string('clientAddress_city');
            $table->string('clientAddress_postCode');
            $table->string('clientAddress_country');
            $table->decimal('total', 10, 2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
