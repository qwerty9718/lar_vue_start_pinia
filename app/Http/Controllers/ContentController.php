<?php

namespace App\Http\Controllers;


use App\Http\Resources\En\Post\PostResource_en;
use App\Http\Resources\Ru\Post\PostResource_ru;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ContentController extends Controller
{
    public function index(){
        return auth()->user();
    }

    public function getContent(){
        $data = null;
        $posts = Post::all();

        if (App::getLocale() == 'en'){
            $data = PostResource_en::collection($posts)->resolve();
        }
        if (App::getLocale() == 'ru'){
            $data = PostResource_ru::collection($posts)->resolve();
        }

        return $data;
    }

    public function getSecondContent(){
        return  __('messages.message');
    }
}
