<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::inRandomOrder()->first();
        $post = Post::inRandomOrder()->first();
        return [
            'title' => $user->name,
            'body' => fake()->sentence(10),
            'post_id' => $post->id,
            'user_id' => $user->id,
            'parent_id' => 0
        ];
    }
}
