<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        return Comment::all();
    }

    public function createComment(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'body' => 'required|string'
        ]);

        return Comment::create($data);
    }
}
