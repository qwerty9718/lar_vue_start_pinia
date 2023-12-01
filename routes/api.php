<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Comment\CommentController;
use App\Http\Controllers\ContentController;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => LocalizationService::locale(), 'middleware' => 'setLocale'], function () {

    Route::group(['prefix' => 'content', 'middleware' => 'auth:sanctum'], function (){
        Route::get('/posts', [ContentController::class, 'getContent']);
        Route::post('/posts',[ContentController::class,'createPost']);
        Route::get('/message', [ContentController::class, 'getSecondContent']);
    });

    Route::group(['prefix' => 'comment', 'middleware' => 'auth:sanctum'], function (){
        Route::get('/', [CommentController::class, 'index']);
        Route::get('/{id}/replies', [CommentController::class, 'getReplies']);
        Route::get('/{id}/post', [CommentController::class, 'getCommentsByPost']);

        Route::post('/',[CommentController::class,'createComment']);
        Route::post('/reply',[CommentController::class,'createReply']);
        Route::delete('/{id}',[CommentController::class,'deleteComment']);
    });

    Route::group(['prefix' => 'auth'], function () {
        Route::post('/logout', [AuthController::class,'logout'])->middleware('auth:sanctum');
        Route::get('/get', [AuthController::class,'someContent'])->middleware('auth:sanctum');
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
    });

});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/user-data', [ContentController::class, 'index']);
});



