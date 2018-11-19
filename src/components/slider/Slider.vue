<template>
    <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange" @beforeChange="handleBeforeChange" @breakpoint="handleBreakpoint" @destroy="handleDestroy" @edge="handleEdge" @init="handleInit" @reInit="handleReInit" @setPosition="handleSetPosition" @swipe="handleSwipe" @lazyLoaded="handleLazyLoaded" @lazyLoadError="handleLazeLoadError">

        <div v-for="(slide,i) in slides" :key="i" class="slide">
            <v-layout justify-center align-center fill-height :class="slide.cssClass">
                <figure></figure>
                <div class="slide-texts text-xs-center">
                    <div class="special-slide" v-if="slide.special">
                        <div class="text-title he" v-if="slide.special.title" v-html="slide.special.title.he"></div>
                        <div class="text-title en" v-if="slide.special.title">
                            <div v-if="slide.special" v-html="slide.special.title.en"></div>
                        </div>
                        <div class="text-title fr" v-if="slide.special.title">
                            <div v-if="slide.special" v-html="slide.special.title.fr"></div>
                        </div>
                        <div class="text-desc he" v-if="slide.special.desc">
                            <div v-if="slide.special" v-html="slide.special.desc.he"></div>
                        </div>
                        <div class="text-desc en" v-if="slide.special.desc">
                            <div v-if="slide.special" v-html="slide.special.desc.en"></div>
                        </div>
                        <div class="text-desc fr" v-if="slide.special.desc">
                            <div v-if="slide.special" v-html="slide.special.desc.fr"></div>
                        </div>
                    </div>
                    <div class="texts" v-if="slide.texts">
                        <div class="slide-text he">
                            <span class="text-says" v-html="slide.texts.textSays.he"></span>
                            <span class="text-main" v-html="slide.texts.textMain.he"></span>
                            <span class="text-source" v-html="slide.texts.textSource.he"></span>
                        </div>
                        <div class="slide-text en">
                            <span class="text-says" v-html="slide.texts.textSays.en"></span>
                            <span class="text-main" v-html="slide.texts.textMain.en"></span>
                            <span class="text-source" v-html="slide.texts.textSource.en"></span>
                        </div>
                        <div class="slide-text fr">
                            <span class="text-says" v-html="slide.texts.textSays.fr"></span>
                            <span class="text-main" v-html="slide.texts.textMain.fr"></span>
                            <span class="text-source" v-html="slide.texts.textSource.fr"></span>
                        </div>
                    </div>
                </div>
            </v-layout>
        </div>

    </slick>
</template>

<script src="./slider.js"></script>
<style lang="scss" src="./slider.scss"></style>

