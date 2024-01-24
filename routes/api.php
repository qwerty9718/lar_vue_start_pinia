<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContentController;

use App\Http\Controllers\Message\MessageController;
use App\Http\Controllers\TestController;
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


Route::group(['prefix' => 'messages'], function (){
    Route::get('/', [MessageController::class,'index']);
    Route::post('/', [MessageController::class,'create']);
});



