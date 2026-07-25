<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
     protected $fillable = [
        'item_id',
        'image',
        'is_cover',
        'sort_order',
    ];

    protected $casts = [
        'is_cover' => 'boolean',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
