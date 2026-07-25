<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    
    protected $fillable = [
        'title',
        'slug',
        'description',
        'type',
        'featured',
        'status',
        'time_took',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'status' => 'boolean',
    ];

    // العلاقات

    public function development()
    {
        return $this->hasOne(DevelopmentItem::class);
    }

    public function design()
    {
        return $this->hasOne(DesignItem::class);
    }

    public function marketing()
    {
        return $this->hasOne(MarketingItem::class);
    }

    public function photography()
    {
        return $this->hasOne(PhotographyItem::class);
    }

    public function vfx()
    {
        return $this->hasOne(VfxItem::class);
    }

    public function images()
    {
        return $this->hasMany(GalleryImage::class);
    }

    public function technologies()
    {
        return $this->hasMany(Technology::class);
    }

}
