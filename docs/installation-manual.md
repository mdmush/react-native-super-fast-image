# Installation (Manual)

## iOS

- In Xcode:
    - Add `FastImage.xcodeproj` to **Libraries**.
    - Add `libFastImage.a` to **Link Binary With Libraries** under **Build Phases**.
    - [More info and screenshots.](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)

## Android

* Edit `android/settings.gradle`

```diff
rootProject.name = 'MyApp'

include ':app'

+ include ':react-native-super-fast-image'
+ project(':react-native-super-fast-image').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-super-fast-image/android')
```

* Edit `android/app/build.gradle`

```diff
apply plugin: 'com.android.application'

android {
    ...
}

dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
    implementation "com.facebook.react:react-native:+"  // From node_modules
+   implementation project(':react-native-super-fast-image')
}
```

* Edit `android/app/src/main/java/.../MainApplication.java`

```diff
package com.myapp;

+ import com.mdmush.superfastimage.SuperFastImageViewPackage;

....

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage()
+           ,new SuperFastImageViewPackage()
        );
    }

}
```