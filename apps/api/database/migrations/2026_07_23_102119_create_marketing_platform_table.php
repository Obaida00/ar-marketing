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
            $table->id();
            $table->foreignId('marketing_item_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('platform_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->primary([
                'marketing_item_id',
                'platform_id'
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
