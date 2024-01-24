<?php

namespace App\Http\Controllers;


use App\Http\Requests\Post\PostStoreRequest;

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
        $posts = Post::all();
        return Post::getLocalePostResource('PostResource',App::getLocale(),'collection', $posts);
    }

    public function getSecondContent(){
        return  __('messages.message');
    }


    public function createPost(PostStoreRequest $request){
        $data = $request->validated();
        $post = Post::create($data);
        return Post::getLocalePostResource('PostResource',App::getLocale(),'make', $post);
    }

}
