<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
      protected $fillable = [
        'marketing_item_id',
        'title',
        'value',
        'description',
    ];

    public function marketing()
    {
        return $this->belongsTo(MarketingItem::class);
    }
}
