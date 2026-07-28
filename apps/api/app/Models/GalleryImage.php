<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
     protected $fillable = [
        'itemId',
        'image',
        'isCover',
        'sortOrder',
    ];

    protected $casts = [
        'isCover' => 'boolean',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
