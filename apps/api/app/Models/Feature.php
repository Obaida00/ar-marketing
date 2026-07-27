<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
     protected $fillable = [
        'developmentItemId',
        'title',
        'description',
        'icon',
    ];

    public function development()
    {
        return $this->belongsTo(DevelopmentItem::class);
    }
}
