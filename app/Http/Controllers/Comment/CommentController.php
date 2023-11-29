<?php

namespace App\Http\Controllers\Comment;

use App\Http\Controllers\Controller;

use App\Http\Requests\Comment\ReplyRequest;
use App\Http\Requests\Comment\StoreRequest;
use App\Http\Resources\Comment\CommentResource;
use App\Http\Resources\Comment\ReplyResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
        $comments = CommentResource::collection(Comment::where('parent_id', 0)->orderByDesc('id')->paginate(5));
        return $comments;
    }
    public function getCommentsByPost($id){
        $post = Post::findOrFail($id);
        return CommentResource::collection($post->comments());
    }
    public function getReplies($id){
        $replies = ReplyResource::collection(Comment::findOrFail($id)
            ->replies()
            ->orderBy('id', 'desc')
            ->paginate(10));
        return $replies;
    }

    public function createComment(StoreRequest $request){
        $data = $request->validated();
        return CommentResource::make(Comment::create($data))->resolve();
    }

    public function createReply(ReplyRequest $request){
        $data = $request->validated();
        return ReplyResource::make(Comment::create($data))->resolve();
    }
}
