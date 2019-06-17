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

#ifndef __GetSocialViewBuilder_h
#define __GetSocialViewBuilder_h

#import <UIKit/UIKit.h>

/**
 *  Abstract class for ViewBuilders
 */
@interface GetSocialViewBuilder : NSObject

/**
 *  Get/Set the title to show on top of the view
 */
@property(nonatomic, strong) NSString *title;

/**
 *  Shows the view
 */
- (void)show;

@end

#endif
