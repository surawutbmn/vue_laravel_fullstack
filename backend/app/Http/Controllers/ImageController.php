<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return Image::where('user_id', $user->id)
            ->latest()
            ->get()
            ->map(function ($image) {
                return [
                    'id' => $image->id,
                    'label' => $image->label ?? 'no label',
                    'desc' => $image->desc,
                    'url' => asset('storage/' . $image->path),
                ];
            });
        // return Image::latest()
        //     ->get()
        //     ->map(function ($image) {
        //         return [
        //             'id' => $image->id,
        //             'label' => $image->label,
        //             'url' => url(Storage::url($image->path)),
        //             'desc' => $image->desc
        //         ];
        //     });
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => ['required', 'file', 'image', 'mimes:jpeg,png,jpg'],
            'label' => ['nullable', 'string', 'max:255'],
            'desc' => ['nullable', 'string', 'max:255'],
        ]);

        $path = $request->file('image')->store('images', 'public');

        $image = Image::create([
            'path' => $path,
            'label' => $request->label,
            'desc' => $request->desc,
            'user_id' => $request->user()->id,
        ]);

        return response($image, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Image $image)
    {
        if ($image->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if (Storage::disk('public')->exists($image->path)) {
            Storage::disk('public')->delete($image->path);
        }
        $image->delete();
        return response(null, 204);
    }
}
