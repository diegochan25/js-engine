export enum Controller {
    /**
     * Represents the lowermost face button on a standard controller.
     * 
     * - **Nintendo:** B button.
     * - **PlayStation:** Cross (✕) button.
     * - **Xbox:** A button.
     */
    ButtonSouth = 0,

    /**
     * Represents the rightmost face button on a standard controller.
     * 
     * - **Nintendo:** A button.
     * - **PlayStation:** Circle (○) button.
     * - **Xbox:** B button.
     */
    ButtonEast = 1,

    /**
     * Represents the leftmost face button on a standard controller.
     * 
     * - **Nintendo:** Y button.
     * - **PlayStation:** Square (▢) button.
     * - **Xbox:** X button.
     */
    ButtonWest = 2,

    /**
     * Represents the uppermost face button on a standard controller.
     * 
     * - **Nintendo:** X button.
     * - **PlayStation:** Triangle (△) button.
     * - **Xbox:** Y button.
     */
    ButtonNorth = 3,

    /**
     * Represents the left shoulder button on a standard controller.
     * 
     * - **Nintendo:** L button.
     * - **PlayStation:** L1 button.
     * - **Xbox:** LB button.
     */
    ShoulderL = 4,

    /**
     * Represents the right shoulder button on a standard controller.
     * 
     * - **Nintendo:** R button.
     * - **PlayStation:** R1 button.
     * - **Xbox:** RB button.
     */
    ShoulderR = 5,

    /**
     * Represents the left trigger on a standard controller.
     * 
     * - **Nintendo:** ZL trigger.
     * - **PlayStation:** L2 trigger.
     * - **Xbox:** LT trigger.
     */
    TriggerL = 6,

    /**
     * Represents the right trigger on a standard controller.
     * 
     * - **Nintendo:** ZR trigger.
     * - **PlayStation:** R2 trigger.
     * - **Xbox:** RT trigger.
     */
    TriggerR = 7,

    /**
     * Represents the "select" or "back" function button.
     * 
     * - **Nintendo:** Minus (−) button.
     * - **PlayStation:** Share button.
     * - **Xbox:** View (⧉) button.
     */
    Select = 8,

    /**
     * Represents the "start" or "menu" function button.
     * 
     * - **Nintendo:** Plus (+) button.
     * - **PlayStation:** Options (≡) button.
     * - **Xbox:** Menu (≡) button.
     */
    Start = 9,

    /**
     * Represents the left joystick click on a standard controller.
     * 
     * - **Nintendo:** L stick click (L⇩).
     * - **PlayStation:** L3 button.
     * - **Xbox:** LS button.
     */
    JoyL = 10,

    /**
     * Represents the right joystick click on a standard controller.
     * 
     * - **Nintendo:** R stick click (R⇩).
     * - **PlayStation:** R3 button.
     * - **Xbox:** RS button.
     */
    JoyR = 11,

    /**
     * Represents the upward direction on the directional pad (D-pad).
     */
    DpadUp = 12,

    /**
     * Represents the downward direction on the directional pad (D-pad).
     */
    DpadDown = 13,

    /**
     * Represents the leftward direction on the directional pad (D-pad).
     */
    DpadLeft = 14,

    /**
     * Represents the rightward direction on the directional pad (D-pad).
     */
    DpadRight = 15,

    /**
     * Represents the primary system button for accessing console menus.
     * 
     * - **Nintendo:** Home (🏠︎) button.
     * - **PlayStation:** PS button.
     * - **Xbox:** Xbox (⊗) button.
     */
    Home = 16,

    /**
     * Represents an additional button on certain controller layouts.
     * 
     * - **PlayStation:** The touchpad press.
     */
    Special = 17
}