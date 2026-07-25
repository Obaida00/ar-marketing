<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DevelopmentItem extends Model
{
     protected $fillable = [
        'item_id',
        'url',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    public function features()
    {
        return $this->hasMany(Feature::class);
    }
}
