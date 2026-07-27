<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
     protected $fillable = [
        'itemId',
        'name',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
