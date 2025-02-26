controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selctor_position > 0) {
        selctor_position += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selctor_position == 1) {
        start_presentation()
    } else if (selctor_position == 0) {
        shrek.setImage(img`
            . f f f f . . . . . f f f f . . 
            . f 7 7 f 2 2 . 2 2 f 7 7 f . . 
            2 f f 7 f 2 4 2 2 4 f 7 f f 4 2 
            4 2 f 7 f 2 4 2 2 4 f 7 f 2 4 2 
            4 2 f 7 f f f f f f f 7 f f 4 2 
            4 f 7 7 7 7 7 7 7 7 7 7 7 7 f 2 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 5 5 5 7 5 5 5 7 7 7 7 f 
            f 7 7 7 7 5 5 7 5 5 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f f f f f f f f f 7 7 7 f 
            f 7 7 7 f f f f f f f 7 7 7 7 f 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . . f f f f f f f f f f . . . 
            `)
        controller.moveSprite(shrek, 400, 400)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (selctor_position == 0) {
        shrek.setImage(img`
            . f f f f . . . . . f f f f . . 
            . f 7 7 f . . . . . f 7 7 f . . 
            . f f 7 f . . . . . f 7 f f . . 
            . . f 7 f . . . . . f 7 f . . . 
            . . f 7 f f f f f f f 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f 7 7 7 7 7 7 7 7 f 7 7 f 
            f 7 7 7 f 7 7 7 7 7 7 f 7 7 7 f 
            f 7 7 7 7 f f f f f f 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . . f f f f f f f f f f . . . 
            `)
        controller.moveSprite(shrek, 100, 100)
    }
})
function start_presentation () {
    tiles.setCurrentTilemap(tilemap`level2`)
    shrek.setPosition(125, 150)
    controller.moveSprite(shrek, 100, 100)
    scene.cameraFollowSprite(shrek)
    selctor_position = 0
    pressentation.setPosition(-1000, 0)
    What_are_Majic_Mushrooms.setPosition(0, 0)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selctor_position > 0) {
        selctor_position += 1
    }
})
function tilemap_to_pixels (position: number) {
    return position
}
let What_are_Majic_Mushrooms: TextSprite = null
let selctor_position = 0
let shrek: Sprite = null
let pressentation: TextSprite = null
scene.setBackgroundImage(img`
    22222222222222222222222222f3333333333333333333333333333333333333333333333f555555555555555555555555555555555555555f222222222222222222222222222222222222222222f333
    222222222222222222222222ff333333333333333333333333333333333333333333333ff55555555555555555555555555555555555555ff22222222222222222222222222222222222222222ff3333
    2222222222222222222222ff3333333333333333333333333333333333333333333333f555555555555555555555555555555555555555f222222222222222222222222222222222222222222f333333
    22222222222222222222ff3333333333333333333333333333333333333333333333ff55555555555555555555555555555555555555ff222222222222222222222222222222222222222222f3333333
    222222222222222222ff3333333333333333333333333333333333333333333333ff555555555555555555555555555555555555555f222222222222222222222222222222222222222222ff33333333
    2222222222222222ff33333333333333333333333333333333333333333333333f5555555555555555555555555555555555555555f222222222222222222222222222222222222222222f3333333333
    22222222222222ff33333333333333333333333333333333333333333333333ff555555555555555555555555555555555555555ff222222222222222222222222222222222222222222f33333333333
    2222222222222f333333333333333333333333333333333333333333333333f5555555555555555555555555555555555555555f222222222222222222222222222222222222222222ff333333333333
    22222222222ff33333333333333333333333333333333333333333333333ff555555555555555555555555555555555555555ff222222222222222222222222222222222222222222f33333333333333
    222222222ff33333333333333333333333333333333333333333333333ff5555555555555555555555555555555555555555f222222222222222222222222222222222222222222ff333333333333333
    2222222ff333333333333333333333333333333333333333333333333f5555555555555555555555555555555555555555ff222222222222222222222222222222222222222222f33333333333333333
    22222ff333333333333333333333333333333333333333333333333ff5555555555555555555555555555555555555555f2222222222222222222222222222222222222222222f333333333333333333
    222ff3333333333333333333333333333333333333333333333333f55555555555555555555555555555555555555555f222222222222222222222222222222222222222222ff3333333333333333333
    2ff3333333333333333333333333333333333333333333333333ff5555555555555555555555555555555555555555ff222222222222222222222222222222222222222222f333333333333333333333
    f3333333333333333333333333333333333333333333333333ff55555555555555555555555555555555555555555f222222222222222222222222222222222222222222ff3333333333333333333333
    3333333333333333333333333333333333333333333333333f55555555555555555555555555555555555555555ff222222222222222222222222222222222222222222f333333333333333333333333
    33333333333333333333333333333333333333333333333ff55555555555555555555555555555555555555555f2222222222222222222222222222222222222222222f3333333333333333333333333
    3333333333333333333333333333333333333333333333f55555555555555555555555555555555555555555ff222222222222222222222222222222222222222222ff33333333333333333333333333
    33333333333333333333333333333333333333333333ff55555555555555555555555555555555555555555f2222222222222222222222222222222222222222222f3333333333333333333333333333
    3333333333333333333333333333333333333333333f555555555555555555555555555555555555555555f2222222222222222222222222222222222222222222f33333333333333333333333333333
    33333333333333333333333333333333333333333ff55555555555555555555555555555555555555555ff222222222222222222222222222222222222222222ff333333333333333333333333333333
    333333333333333333333333333333333333333ff555555555555555555555555555555555555555555f2222222222222222222222222222222222222222222f33333333333333333333333333333333
    33333333333333333333333333333333333333f555555555555555555555555555555555555555555ff222222222222222222222222222222222222222222ff333333333333333333333333333333333
    333333333333333333333333333333333333ff555555555555555555555555555555555555555555f2222222222222222222222222222222222222222222f33333333333333333333333333333333333
    333333333333333333333333ffffffffffffffffffffffffffffffff5555555ffffffffffffffffff2222fffffffffffff22222222ffffffffffff22222ffffffffffff3333333333333333333333333
    333333333333333333333333f33333333ff5555f555555555555555f5555555f5555555555555f22f2222f2222222222222222222222222f222222222ff3f33333333333333333333333333333333333
    333333333333333333333333f333333ff555555f555555555555555f5555555f555555555555f222f2222f2222222222222222222222222f22222222f333f33333333333333333333333333333333333
    333333333333333333333333f33333f55555555f555555555555555f5555555f5555555555ff2222f2222f2222222222222222222222222f2222222f3333f33333333333333333333333333333333333
    333333333333333333333333f333ff555555555f555555555555555f5555555f555555555f222222f2222f2222222222222222222222222f22222ff33333f33333333333333333333333333333333333
    333333333333333333333333f33f55555555555f555555555555555f5555555f5555555ff2222222f2222f2222222222222222222222222f2222f3333333f33333333333333333333333333333333333
    333333333333333333333333fff555555555555f555555555555555f5555555f555555f222222222f2222f2222222222222222222222222f22ff33333333f33333333333333333333333333333333333
    333333333333333333333333f55555555555555f555555555555555f5555555f5555ff2222222222f2222f2222222222222222222222222f2f3333333333f33333333333333333333333333333333333
    3333333333333333333333fff55555555555555f555555555555555f5555555ffffffffffffffffff2222f2222222222222222222222222ff33333333333f33333333333333333333333333333333333
    33333333333333333333ff55f55555555555555f555555555555555f5555555f55f2222222222222f2222f222222222222222222222222ff333333333333f33333333333333333333333333333333333
    3333333333333333333f5555f55555555555555f555555555555555f5555555fff22222222222222f2222f222222ffffffff222222222f3f333333333333f3333333333333333333333333333333333f
    33333333333333333ff55555f55555555555555f555555555555555f5555555f2222222222222222f2222f2222222222222f2222222ff33f333333333333f33333333333333333333333333333333ff5
    3333333333333333f5555555f55555555555555f555555555555555f55555fff2222222222222222f2222f2222222222222f222222f3333f333333333333f3333333333333333333333333333333f555
    33333333333333ff55555555f555555555555555555555555555555f5555f22f2222222222222222f2222f2222222222222f22222f33333f333333333333f33333333333333333333333333333ff5555
    333333333333ff5555555555f555555555555555555555555555555f55ff222f2222222222222222f2222f2222222222222f222ff333333f333333333333f333333333333333333333333333ff555555
    33333333333f555555555555f555555555555555555555555555555f5f22222f2222222222222222f2222f2222222222222f22f33333333f333333333333f33333333333333333333333333f55555555
    333333333ff5555555555555f555555555555555555555555555555ff222222f2222222222222222f2222f2222222222222f2f333333333f333333333333f333333333333333333333333ff555555555
    33333333f555555555555555f55555555555555555555555555555ff2222222f2222222222222222f2222f2222222222222ff3333333333f333333333333f33333333333333333333333f55555555555
    333333ff5555555555555555f5555555555555555555555555555f2f2222222f2222222222222222f2222f222222222222ff33333333333f333333333333f333333333333333333333ff555555555555
    3333ff555555555555555555f55555555555555555555555555ff22f2222222f2222222222222222f2222fffffffffffffff3333333fffffffff33333333f3333333333333333333ff55555555555555
    333f55555555555555555555f5555555555555555555555555f2222f2222222f2222222222222222222222222222222f3333333333333333333333333333ffffffffffff3333333f5555555555555555
    3ff555555555555555555555f55555555555555555555555ff22222f22222222222222222222222222222222222222f3333333333333333333333333333333333333333333333ff55555555555555555
    f55555555555555555555555f5555555555555555555555f22222222222222222222222222222222222222222222ff3333333333333333333333333333333333333333333333f5555555555555555555
    555555555555555555555555f555555555555555555555f22222222222222222222222222222222222222222222f3333333333333333333333333333333333333333333333ff55555555555555555555
    555555555555555555555555f5555555555555555555ff22222222222222222222222222222222222222222222f333333333333333333333333333333333333333333333ff5555555555555555555555
    555555555555555555555555f555555555555555555f22222222222222222222222222222222222222222222ff333333333333333333333333333333333333333333333f555555555555555555555555
    55555555555555555555555555555555555555555ff22222222222222222222222222222222222222222222f333333333333333333333333333333333333333333333ff5555555555555555555555555
    5555555555555555555555555555555555555555f22222222222222222222222222222222222222222222ff333333333333333333333333333333333333333333333f555555555555555555555555555
    55555555555555555555555555555555555555ff22222222222222222222222222222222222222222222f333333333333333333333333333333333333333333333ff5555555555555555555555555555
    5555555555555555555555555555555555555f222222222222222222222222222222222222222222222f333333333333333333333333333333333333333333333f555555555555555555555555555555
    555555555555555555555555555555555555f22222222222222222222222222222222222222222222ff33333333333333333333333333333333333333333333ff5555555555555555555555555555555
    5555555555555555555555555555555555ff22222222222222222222222222222222222222222222f33333333333333333333333333333333333333333333ff555555555555555555555555555555555
    555555555555555555555555555555555f22222222222222222222222222222222222222222222ff33333333333333333333333333333333333333333333f55555555555555555555555555555555555
    5555555555555555555555555555555ff22222222222222222222222222222222222222222222f33333333333333333333333333333333333333333333ff555555555555555555555555555555555555
    555555555555fffffffffffffffffffffff22222222222222222222222222222222222222222f33333333333333333333333333333333333333333333f55555555555555555555555555555555555555
    555555555555f5555555555f5555ff2222f2222f222222222222f222fffffffff2222f2222ff333f3333ffffffff333333fffffffffffff333ffffffffffff555fffffffffff555ffffffff555555555
    555555555555f5555555555f555f222222f2222f222222222222f222f222222222222f222f33333f3333f333333f333333f33333333333f333f33ff555555f555f5555f5555f555f5555555555555555
    555555555555f5555555555f55f2222222f2222f222222222222f222f222222222222f22f333333f3333f333333f333333f33333333333f333f3f55555555f555f5555f5555f555f5555555555555555
    555555555555f5555555555fff22222222f2222f222222222222f222f222222222222fff3333333f3333f333333f333333f33333333333f333ff555555555f555f5555f5555f555f5555555555555555
    555555555555f5555555555f2222222222f2222f222222222222f222f222222222222f333333333f3333f333333f333333f33333333333f33ff5555555555f555f5555f5555f555f5555555555555555
    555555555555f55555555fff2222222222f2222f222222222222f222f2222222222fff333333333f3333f333333f333333f33333333333fff5f5555555555f555f5555f5555f555f5555555555555555
    555555555555f5555555f22f2222222222f2222f222222222222f222f222222222f33f333333333f3333ffffffff333333f3333333333ff555f5555555555f555f5555f5555f555f5555555555555555
    555555555555f55555ff222f2222222222f2222f222222222222f222f22222222f333fffffffffff3333f3f33333333333f333333333f5f555f5555555555f555f5555f5555f555ffffffff555555555
    555555555555f5555f22222f2222222222f2222f222222222222f222f222222ff3333f333333333f3333f33f3333333333f3333333ff55f555f5555555555f555f555555555f5555555555f555555555
    555555555555f555f22222222222222222f2222f222222222222f222f22222f333333f333333333f3333f333f333333333f333333f5555f555f5555555555f555f555555555f5555555555f555555555
    555555555555f5ff222222222222222222f2222f222222222222f222fffffffff3333f333333333f3333f3333f33333333f3333ff55555f555f5555555555f555f555555555f5555555555f555555555
    555555555555ff22222222222222222222f2222f222222222222f222222ff333f3333f333333333f3333f33333f3333333f333f5555555f555f5555555555f555f555555555f5555555555f555555555
    55555555555ff222222222222222222222f2222f222222222222f22222f33333f3333f333333333f3333f333333f333333f3ff55555555f555f5555555555f555f555555555f5555555555f555555555
    5555555555f2f222222222222222222222f2222f222222222222f222ff333333f3333f333333333f3333f3333333f33333ff5555555555f555f5555555555f555f555555555f5555555555f55555555f
    55555555ff22f222222222222222222222f2222f222222222222f22f33333333f3333f333333333f3333f33333333f333ff55555555555f555f5555555555f555f555555555f555ffffffff555555ff2
    5555555f2222f222222222222222222222f2222f222222222222f2f333333333f3333f333333333f3333f33333333f3ff5f55555555555f555f5555555555f555f5555555555555555555555555ff222
    555555f22222f222222222222222222222f2222fffffffffffffff33fffffffff3333f333333333f33333333333333f555fffffffffffff555ffffffffffff555555555555555555555555555ff22222
    5555ff222222222222222222222222222222222222222222222f3333333333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555555f2222222
    555f2222222222222222222222222222222222222222222222f333333333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555555ff22222222
    5ff222222222222222222222222222222222222222222222ff333333333333333333333333333333333333333f5555555555555555555555555555555555555555555555555555555555ff2222222222
    f2222222222222222222222222222222222222222222222f333333333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555555f222222222222
    222222222222222222222222222222222222222222222ff333333333333333333333333333333333333333f5555555555555555555555555555555555555555555555555555555555ff2222222222222
    22222222222222222222222222222222222222222222f333333333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555555ff222222222222222
    2222222222222222222222222222222222222222222f33333333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555555ff22222222222222222
    22222222222222222222222222222222222222222ff33333333333333333333333333333333333333f5555555555555555555555555555555555555555555555555555555555f2222222222222222222
    2222222222222222222222222222222222222222f33333333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555555ff22222222222222222222
    22222222222222222222222222222222222222ff33333333333333333333333333333333333333f555555555555555555555555555555555555555555555555555555555ff2222222222222222222222
    2222222222222222222222222222222222222f33333333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555555f222222222222222222222222
    222222222222222222222222222222222222f33333333333333333333333333333333333333f555555555555555555555555555555555555555555555555555555555ff2222222222222222222222222
    2222222222222222222222222222222222ff3333333333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555555ff222222222222222222222222222
    222222222222222222222222222222222f3333333333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555555ff22222222222222222222222222222
    22222222222222222222222222222222f3333333333333333333333333333333333333f555555555555555555555555555555555555555555555555555555555f2222222222222222222222222222222
    222222222222222222222222222222ff333333333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222
    22222222222222222222222222222f3333333333333333333333333333333333333f55555555555555555555555555555555555555555555555555555555ff2222222222222222222222222222222222
    222222222222222222222222222ff333333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555ff222222222222222222222222222222222222
    22222222222222222222222222f333333333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555555f22222222222222222222222222222222222222
    2222222222222222222222222f333333333333333333333333333333333333f55555555555555555555555555555555555555555555555555555555ff222222222222222222222222222222222222222
    22222222222222222222222ff33333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222222222222
    2222222222222222222222f333333333333333333333333333333333333f55555555555555555555555555555555555555555555555555555555f2222222222222222222222222222222222222222222
    222222222222222222222f33333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222222222222222
    2222222222222222222ff3333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555ff2222222222222222222222222222222222222222222222
    222222222222222222f33333333333333333333333333333333333f5555555555555555555555555555555555555555555555555555555ff222222222222222222222222222222222222222222222222
    2222222222222222ff3333333333333333333333333333333333ff5555555555555555555555555555555555555555555555555555555f22222222222222222222222222222222222222222222222222
    222222222222222f33333333333333333333333333333333333f5555555555555555555555555555555555555555555555555555555ff222222222222222222222222222222222222222222222222222
    22222222222222f3333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222222222222222222222222
    222222222222ff3333333333333333333333333333333333f555555555555555555555555555555555555555555555555555555ff2222222222222222222222222222222222222222222222222222222
    22222222222f3333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555f222222222222222222222222222222222222222222222222222222222
    222222222ff333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555ff2222222222222222222222222222222222222222222222222222222222
    22222222f3333333333333333333333333333333333f555555555555555555555555555555555555555555555555555555ff222222222222222222222222222222222222222222222222222222222222
    2222222f333333333333333333333333333333333ff555555555555555555555555555555555555555555555555555555f2222222222222222222222222222222222222222222222222222222222222f
    22222ff333333333333333333333333333333333f555555555555555555555555555555555555555555555555555555ff2222222222222222222222222222222222222222222222222222222222222f3
    2222f333333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555ff2222222222222222222222222222222222222222222222222222222222222ff33
    222f33333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222222222222222222222222222222222f3333
    2ff33333333333333333333333333333333f555555555555555555555555555555555555555555555555555555f22222222222222222222222222222222222222222222222222222222222222ff33333
    f33333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222222222222222222222222222222222f3333333
    33333333333333333333333333333333f55555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222222222222222222222222222222222ff33333333
    333333333333333333333333333333ff55555555555555555555555555555555555555555555555555555f222222222222222222222222222222222222222222222222222222222222222f3333333333
    3333333333333333333333333333ff55555555555555555555555555555555555555555555555555555ff22222222222222222222222222222222222222222222222222222222222222ff33333333333
    333333333333333333333333333f55555555555555555555555555555555555555555555555555555ff222222222222222222222222222222222222222222222222222222222222222f3333333333333
    3333333333333333333333333ff5555555555555555555555555555555555555555555555555555ff222222222222222222222222222222222222222222222222222222222222222ff33333333333333
    333333333333333333333333f55555555555555555555555555555555555555555555555555555f2222222222222222222222222222222222222222222222222222222222222222f3333333333333333
    `)
pressentation = textsprite.create("Presentation", 8, 7)
pressentation.setBorder(1, 15, 5)
pressentation.setPosition(90, 90)
let selector = sprites.create(img`
    f f . . . . . . . . . . . . . . 
    f 5 f f . . . . . . . . . . . . 
    f 5 5 5 f f . . . . . . . . . . 
    f 5 5 5 5 5 f f f . . . . . . . 
    f 5 5 5 5 5 5 5 5 f f . . . . . 
    f 5 5 5 5 5 5 5 5 5 5 f f . . . 
    f 5 5 5 5 5 5 5 5 5 5 5 5 f f . 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 f f . 
    f 5 5 5 5 5 5 5 5 5 5 f f . . . 
    f 5 5 5 5 5 5 5 5 f f . . . . . 
    f 5 5 5 5 5 5 5 f . . . . . . . 
    f 5 5 5 5 5 f f . . . . . . . . 
    f 5 5 5 f f . . . . . . . . . . 
    f 5 f f . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
shrek = sprites.create(img`
    . f f f f . . . . . f f f f . . 
    . f 7 7 f . . . . . f 7 7 f . . 
    . f f 7 f . . . . . f 7 f f . . 
    . . f 7 f . . . . . f 7 f . . . 
    . . f 7 f f f f f f f 7 f f . . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 f 7 7 7 7 7 7 7 7 f 7 7 f 
    f 7 7 7 f 7 7 7 7 7 7 f 7 7 7 f 
    f 7 7 7 7 f f f f f f 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 f . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
shrek.setPosition(-1000, 0)
selctor_position = 1
What_are_Majic_Mushrooms = textsprite.create("What Are Majic mushrooms?", 0, 15)
What_are_Majic_Mushrooms.setMaxFontHeight(10)
What_are_Majic_Mushrooms.setPosition(-1700, 0)
game.onUpdate(function () {
    if (selctor_position == 1) {
        selector.setPosition(30, 90)
    } else if (selctor_position == 2) {
    	
    } else if (selctor_position == 3) {
    	
    } else if (selctor_position == 0) {
        selector.setPosition(-1500, 0)
    }
})
