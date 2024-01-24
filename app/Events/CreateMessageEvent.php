<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CreateMessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $message;
    public function __construct($message)
    {
        $this->message = $message;
    }
    public function broadcastOn(): array
    {
        return [
            new Channel('create_message_channel'),
        ];
    }

    public function broadcastAs(): string
    {
        return 'create_message_listen';
    }

    public function broadcastWith(): array
    {
        return ['message' => $this->message];
    }
}
