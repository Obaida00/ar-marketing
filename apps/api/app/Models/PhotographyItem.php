<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhotographyItem extends Model
{
    protected $fillable = [
        'item_id',
    ];
    protected $table = 'photography_items';

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
