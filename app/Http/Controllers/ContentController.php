<?php

namespace App\Http\Controllers;

use App\Http\Resources\Post\PostResource_En;
use App\Http\Resources\Post\PostResource_Ru;
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
            $data = PostResource_En::collection($posts)->resolve();
        }

        if (App::getLocale() == 'ru'){
            $data = PostResource_Ru::collection($posts)->resolve();
        }

        return $data;
    }

    public function getSecondContent(){
        return  __('messages.message');
    }
}
