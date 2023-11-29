<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();

            $table->string('title')->default('some comment');
            $table->text('body');

            $table->unsignedBigInteger('post_id');
            $table->index('post_id','post_comment_idx');
            $table->foreign('post_id','post_comment_fk')
                ->on('posts')
                ->references('id');

            $table->unsignedBigInteger('user_id');
            $table->index('user_id','user_comment_idx');
            $table->foreign('user_id','user_comment_fk')
                ->on('users')
                ->references('id');

            $table->integer('parent_id')->default(0)->index();

            $table->integer('reply_from')->nullable();
            $table->integer('reply_to')->nullable();
            $table->string('reply_title')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
