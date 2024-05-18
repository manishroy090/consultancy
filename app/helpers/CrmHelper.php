<?php

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpKernel\HttpCache\Store;

if (!function_exists('image_upload')) {
    function image_upload($path, $image, $title, $width, $height)
    {
        if (!File::isDirectory('image/' . $path)) {
            File::makeDirectory('image/' . $path);
            File::makeDirectory('image/' . $path . '/tumnail');
        }
        $manager = new ImageManager(new Driver());
        $filename = $title . "." . $image->extension();
        $image = $manager->read($image);
        $image->save(public_path('image/' . $path . '/' . $filename));
        $thumbnail = $image->resize($width, $height);
        $thumbnail->save(public_path('image/' . $path . '/tumnail/' . $filename));
        return $filename;
    }
}

if (!function_exists('upload_multiple_image')) {
    function upload_multiple_image($path, array $images, $title, $width, $height)
    {
        if (!File::isDirectory('image/' . $path)) {
            File::makeDirectory('image/' . $path);
            File::makeDirectory('image/' . $path . '/tumnail');
        }
        $manager = new ImageManager(new Driver());
        $filenames = [];
        foreach ($images as $key => $image) {
            $filename = $title . '_' . $key . '.' . $image->extension();
            $image = $manager->read($image);
            $image->save(public_path('image/' . $path . '/' . $filename));
            $thumbnail = $image->resize($width, $height);
            $thumbnail->save(public_path('image/' . $path . '/tumnail/' . $filename));
            $filenames[$key] = $filename;
        }

        return $filenames;
    }
}


if (!function_exists('image_update')) {
    function image_update($path, $newImage, $oldImage, $title, $width, $height)
    {

        if ($newImage) {
            try {
                 $exits = Storage::disk('image')->exists($path . "/" . $oldImage);
                if ($exits) {
                    Storage::disk('image')->delete($path . '/' . $oldImage);
                    Storage::disk('image')->delete($path . '/tumnail/' . $oldImage);
                    $manager = new ImageManager(new Driver());
                    $filename = $title . "." . $newImage->extension();
                    $image = $manager->read($newImage);
                    $image->save(public_path('image/' . $path . '/' . $filename));
                    $thumbnail = $image->resize($width, $height);
                    $thumbnail->save(public_path('image/' . $path . '/tumnail/' . $filename));
                    return  $filename;
                }
            } catch (\Throwable $th) {
               
            }
        } else {
            return $oldImage;
        }
    }
}


if (!function_exists('updateMultipleImage')) {
    function updateMultipleImage($path, array $newImages, $oldImages, $title, $width, $height)
    {
        $manager = new ImageManager(new Driver());
        $filenames = [];
        foreach ($newImages as $key => $image) {
            $oldImage = $oldImages[$key];
            if (!is_null($image)) {
                $exits = Storage::disk('image')->exists($path . "/" .  $oldImage );
                if ($exits) {
                    Storage::disk('image')->delete($path . '/' .  $oldImage );
                    Storage::disk('image')->delete($path . '/tumnail/' .  $oldImage);
                    $filename = $title ."_".$key."." . $image->extension();
                    $image = $manager->read($image);
                    $image->save(public_path('image/' . $path . '/' . $filename));
                    $thumbnail = $image->resize($width, $height);
                    $thumbnail->save(public_path('image/' . $path . '/tumnail/' . $filename));
                    $filenames[$key]=$filename; 
                }
            } else {
                $filenames[$key]=$oldImage;
            }
        }
        return $filenames;   
    }
}



if (!function_exists('image_delete')) {
    function image_delete($path, $image)
    {
        Storage::disk('image')->delete('image/' . $path . '/' . $image);
        Storage::disk('image')->delete('image/' . $path . '/tumnail/' . $image);
    }
}
