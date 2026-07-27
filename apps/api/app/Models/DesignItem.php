<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DesignItem extends Model
{
     protected $fillable = [
        'itemId',
        'brandOverview',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    public function brandGoals()
    {
        return $this->hasMany(BrandGoal::class);
    }
}
