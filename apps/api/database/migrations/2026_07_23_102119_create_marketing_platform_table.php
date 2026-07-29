<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('marketing_platform', function (Blueprint $table) {

            $table->foreignId('marketingItemId')
                ->constrained('marketing_items')
                ->cascadeOnDelete();

            $table->foreignId('platformId')
                ->constrained('platforms')
                ->cascadeOnDelete();

            $table->primary([
                'marketingItemId',
                'platformId'
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marketing_platform');
    }
};
