<?php

namespace App\Models;

use App\Models\Invoice;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Item extends Model
{
    protected $fillable = [
        'items.*.name',
        'items.*.quantity',
        'items.*.price',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
