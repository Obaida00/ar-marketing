<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VfxItem extends Model
{
      protected $fillable = [
        'item_id',
        'overview',
        'result',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
