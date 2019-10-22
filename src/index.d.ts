import * as React from 'react'
import {
    FlexStyle,
    LayoutChangeEvent,
    ShadowStyleIOS,
    StyleProp,
    TransformsStyle,
} from 'react-native'

declare namespace SuperFastImage {
    namespace priority {
        type low = 'low'
        type normal = 'normal'
        type high = 'high'
    }

    namespace resizeMode {
        type contain = 'contain'
        type cover = 'cover'
        type stretch = 'stretch'
        type center = 'center'
    }

    namespace cacheControl {
        type cacheOnly = 'cacheOnly'
        type immutable = 'immutable'
        type web = 'web'
    }

    export type Priority =
        | SuperFastImage.priority.low
        | SuperFastImage.priority.normal
        | SuperFastImage.priority.high

    export type ResizeMode =
        | SuperFastImage.resizeMode.contain
        | SuperFastImage.resizeMode.cover
        | SuperFastImage.resizeMode.stretch
        | SuperFastImage.resizeMode.center

    export type Cache =
        | SuperFastImage.cacheControl.cacheOnly
        | SuperFastImage.cacheControl.immutable
        | SuperFastImage.cacheControl.web
}

export type SuperFastImageSource = {
    uri?: string
    headers?: { [key: string]: string }
    priority?: SuperFastImage.Priority
    cache?: SuperFastImage.Cache
}

export interface ImageStyle extends FlexStyle, TransformsStyle, ShadowStyleIOS {
    backfaceVisibility?: 'visible' | 'hidden'
    borderBottomLeftRadius?: number
    borderBottomRightRadius?: number
    backgroundColor?: string
    borderColor?: string
    borderWidth?: number
    borderRadius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    overlayColor?: string
    tintColor?: string
    opacity?: number
}

export interface OnLoadEvent {
    nativeEvent: {
        width: number
        height: number
    }
}

export interface OnProgressEvent {
    nativeEvent: {
        loaded: number
        total: number
    }
}

export interface SuperFastImageProperties {
    source: SuperFastImageSource | number
    resizeMode?: SuperFastImage.ResizeMode
    fallback?: boolean

    onLoadStart?(): void

    onProgress?(event: OnProgressEvent): void

    onLoad?(event: OnLoadEvent): void

    onError?(): void

    onLoadEnd?(): void

    /**
     * onLayout function
     *
     * Invoked on mount and layout changes with
     *
     * {nativeEvent: { layout: {x, y, width, height}}}.
     */
    onLayout?: (event: LayoutChangeEvent) => void

    /**
     *
     * Style
     */
    style?: StyleProp<ImageStyle>

    /**
     * TintColor
     *
     * If supplied, changes the color of all the non-transparent pixels to the given color.
     */

    tintColor?: number | string

    /**
     * A unique identifier for this element to be used in UI Automation testing scripts.
     */
    testID?: string
}

interface SuperFastImageStatic extends React.ComponentClass<FastImageProperties> {
    resizeMode: {
        contain: SuperFastImage.resizeMode.contain
        cover: SuperFastImage.resizeMode.cover
        stretch: SuperFastImage.resizeMode.stretch
        center: SuperFastImage.resizeMode.center
    }

    priority: {
        low: SuperFastImage.priority.low
        normal: SuperFastImage.priority.normal
        high: SuperFastImage.priority.high
    }

    cacheControl: {
        cacheOnly: SuperFastImage.cacheControl.cacheOnly
        immutable: SuperFastImage.cacheControl.immutable
        web: SuperFastImage.cacheControl.web
    }

    preload(sources: SuperFastImageSource[]): void
}

declare var SuperFastImage: SuperFastImageStatic

type SuperFastImage = SuperFastImageStatic

export default SuperFastImage
