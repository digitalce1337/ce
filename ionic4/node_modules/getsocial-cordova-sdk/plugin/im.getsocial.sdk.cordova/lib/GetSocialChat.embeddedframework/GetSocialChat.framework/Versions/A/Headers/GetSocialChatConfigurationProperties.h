/*
 *    	Copyright 2015-2016 GetSocial B.V.
 *
 *	Licensed under the Apache License, Version 2.0 (the "License");
 *	you may not use this file except in compliance with the License.
 *	You may obtain a copy of the License at
 *
 *    	http://www.apache.org/licenses/LICENSE-2.0
 *
 *	Unless required by applicable law or agreed to in writing, software
 *	distributed under the License is distributed on an "AS IS" BASIS,
 *	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	See the License for the specific language governing permissions and
 *	limitations under the License.
 */

#import <Foundation/Foundation.h>

@interface GetSocialChatConfigurationProperties : NSObject

struct GetSocialChatConfigurationPropertyStruct
{
    __unsafe_unretained NSString *const CHAT_TOOLTIP_BG_IMAGE;    // drawable
    __unsafe_unretained NSString *const CHAT_TOOLTIP_TEXT_STYLE;  // text style

    __unsafe_unretained NSString *const MY_CHAT_MESSAGE_TEXT_STYLE;  // text style
    __unsafe_unretained NSString *const MY_CHAT_MESSAGE_BG_IMAGE_NORMAL;  // drawable
    __unsafe_unretained NSString *const MY_CHAT_MESSAGE_BG_IMAGE_PRESSED;  // drawable
    __unsafe_unretained NSString *const MY_CHAT_MESSAGE_BG_IMAGE_NORMAL_INSETS;  // insets
    __unsafe_unretained NSString *const MY_CHAT_MESSAGE_BG_IMAGE_PRESSED_INSETS;  // insets
    __unsafe_unretained NSString *const MY_CHAT_MESSAGE_TEXT_INSETS;  // insets

    __unsafe_unretained NSString *const THEIR_CHAT_MESSAGE_TEXT_STYLE;  // text style
    __unsafe_unretained NSString *const THEIR_CHAT_MESSAGE_BG_IMAGE_NORMAL;  // drawable
    __unsafe_unretained NSString *const THEIR_CHAT_MESSAGE_BG_IMAGE_PRESSED;  // drawable
    __unsafe_unretained NSString *const THEIR_CHAT_MESSAGE_BG_IMAGE_NORMAL_INSETS;  // insets
    __unsafe_unretained NSString *const THEIR_CHAT_MESSAGE_BG_IMAGE_PRESSED_INSETS;  // insets
    __unsafe_unretained NSString *const THEIR_CHAT_MESSAGE_TEXT_INSETS;  // insets

    __unsafe_unretained NSString *const START_CHAT_BUTTON_TEXT_STYLE;               // text style
    __unsafe_unretained NSString *const START_CHAT_BUTTON_TEXT_Y_OFFSET_NORMAL;     // dimension
    __unsafe_unretained NSString *const START_CHAT_BUTTON_TEXT_Y_OFFSET_PRESSED;    // dimension
    __unsafe_unretained NSString *const START_CHAT_BUTTON_BAR_COLOR;                // color
    __unsafe_unretained NSString *const START_CHAT_BUTTON_BG_IMAGE_NORMAL;          // drawable
    __unsafe_unretained NSString *const START_CHAT_BUTTON_BG_IMAGE_PRESSED;         // drawable
    __unsafe_unretained NSString *const START_CHAT_BUTTON_BG_IMAGE_NORMAL_INSETS;   // insets
    __unsafe_unretained NSString *const START_CHAT_BUTTON_BG_IMAGE_PRESSED_INSETS;  // insets

    __unsafe_unretained NSString *const NO_CHAT_MESSAGES_PLACEHOLDER_BG_IMAGE;  // drawable

    __unsafe_unretained NSString *const CHAT_INPUT_BAR_BG_COLOR;  // color

    __unsafe_unretained NSString *const CHAT_MIGRATION_ENABLED;  // flag

};

extern const struct GetSocialChatConfigurationPropertyStruct GetSocialChatProperty;

@end
