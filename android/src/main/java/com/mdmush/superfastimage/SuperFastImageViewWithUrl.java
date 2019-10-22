package com.mdmush.superfastimage;

import android.content.Context;
import android.widget.ImageView;

import com.bumptech.glide.load.model.GlideUrl;

class SuperFastImageViewWithUrl extends ImageView {
    public GlideUrl glideUrl;

    public SuperFastImageViewWithUrl(Context context) {
        super(context);
    }
}
