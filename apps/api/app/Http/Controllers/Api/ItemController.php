<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreItemRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Item;
use App\Models\DevelopmentItem;
use App\Models\DesignItem;
use App\Models\MarketingItem;
use App\Models\PhotographyItem;
use App\Models\VfxItem;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
            return Item::with([
        'images',
        'technologies',
        'development.features',
        'design.brandGoals',
        'marketing.results',
        'marketing.platforms',
        'photography',
        'vfx'
    ])
    ->latest()
    ->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {

 DB::beginTransaction();

    try {
$data = $request->validated();
        $item = Item::create([

            'title' => $request->title,
            'slug' => $request->slug,
            'description' => $request->description,
            'type' => $request->type,
            'featured' => $request->featured,
            'status' => true,
            'time_took' => $request->time_took,

        ]);

        switch ($request->type) {

            case 'development':

                DevelopmentItem::create([
                    'item_id' => $item->id,
                    'url' => $request->url,
                ]);

                break;

            case 'design':

                DesignItem::create([
                    'item_id' => $item->id,
                    'brand_overview' => $request->brand_overview,
                ]);

                break;

            case 'marketing':

                MarketingItem::create([
                    'item_id' => $item->id,
                ]);

                break;

            case 'photography':

                PhotographyItem::create([
                    'item_id' => $item->id,
                ]);

                break;

            case 'vfx':

                VfxItem::create([
                    'item_id' => $item->id,
                    'overview' => $request->overview,
                    'result' => $request->result,
                ]);

                break;
        }

        DB::commit();

        return response()->json($item,201);

    } catch (\Exception $e){

        DB::rollBack();

        return response()->json([
            'message'=>$e->getMessage()
        ],500);

    }
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
         return $item->load([
        'images',
        'technologies',
        'development.features',
        'design.brandGoals',
        'marketing.results',
        'marketing.platforms',
        'photography',
        'vfx'
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
         DB::beginTransaction();

    try{

        $item->update([

            'title'=>$request->title,
            'slug'=>$request->slug,
            'description'=>$request->description,
            'featured'=>$request->featured,
            'time_took'=>$request->time_took,

        ]);

        DB::commit();

        return response()->json($item);

    }catch(\Exception $e){

        DB::rollBack();

        return response()->json([
            'message'=>$e->getMessage()
        ],500);

    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $item->delete();

    return response()->json([
        'message'=>'Deleted Successfully'
    ]);
    }
}
