<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
      protected $fillable = [
        'marketingItemId',
        'title',
        'value',
        'description',
    ];

    public function marketing()
    {
        return $this->belongsTo(MarketingItem::class,'marketingItemId');
    }
}
