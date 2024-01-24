<?php

namespace App\Http\Controllers\Message;

use App\Events\CreateMessageEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Message\MessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(){
        return Message::all();
    }

    public function create(MessageRequest $request){
        $data = $request->validated();
        $message = Message::create($data);

        broadcast(new CreateMessageEvent($message))->toOthers();

        return $message;
    }
}
