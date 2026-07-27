<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
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
      try{
    //     {
    //     $items = Item::all();
    //     return response()->json($items, 200);
    // }
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
    }catch (\Exception $e){

        DB::rollBack();

        return response()->json([
            'message'=>$e->getMessage()
        ],500);

    }
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
            'timeTook' => $request->time_took,

        ]);

        switch ($request->type) {

            case 'development':

                DevelopmentItem::create([
                    'itemId' => $item->id,
                    'url' => $request->url,
                ]);

                break;

            case 'design':

                DesignItem::create([
                    'itemId' => $item->id,
                    'brandOverview' => $request->brand_overview,
                ]);

                break;

            case 'marketing':

                MarketingItem::create([
                    'itemId' => $item->id,
                ]);

                break;

            case 'photography':

                PhotographyItem::create([
                    'itemId' => $item->id,
                ]);

                break;

            case 'vfx':

                VfxItem::create([
                    'itemId' => $item->id,
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
        try {


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
     catch(\Exception $e){
        return response()->json([
            'error'=>$e->getMessage(),
        ], 500);

    }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, $item)
    {
        $validateData = $request->validated();
        try {
            $item = Item::findOrfail($item);
            // if ($request->hasFile('image')) {

            //     $path = $request->file('image')->store('Flight photo', 'public');
            //     $validateData['image'] = $path;
            // }
            $item->update($validateData);
            return response()->json([
                'message' => 'Flight updated successfully',
                'data'    => $item
            ], 201);
        } catch (Exception) {
            return response()->json(['message' => 'item is not existed'], 404);
        }
        catch(\Exception $e){
        return response()->json([
            'error'=>$e->getMessage(),
        ], 500);

    }
       // DB::beginTransaction();

    // try{

    //     $item->update([

    //         'title'=>$request->title,
    //         'slug'=>$request->slug,
    //         'description'=>$request->description,
    //         'featured'=>$request->featured,
    //         'timeTook'=>$request->time_took,

    //     ]);

    //     DB::commit();

    //     return response()->json($item);

    // }catch(\Exception $e){

    //     DB::rollBack();

    //     return response()->json([
    //         'message'=>$e->getMessage()
    //     ],500);

    // }
     }

    // /**
     // Remove the specified resource from storage.
    // **/
    public function destroy(Item $item)
    {
        try{
        $item->delete();

    return response()->json([
        'message'=>'Deleted Successfully'
    ]);
    }catch(\Exception $e){
        return response()->json([
            'error'=>$e->getMessage(),
        ], 500);

    }
    }
}
