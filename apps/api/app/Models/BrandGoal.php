<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BrandGoal extends Model
{
     protected $fillable = [
        'design_item_id',
        'title',
        'description',
    ];

    public function design()
    {
        return $this->belongsTo(DesignItem::class);
    }
}
