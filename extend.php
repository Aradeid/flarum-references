<?php

/*
 * This file is part of aradeid/flarum-references.
 *
 * Copyright (c) 2022 Aradeid, Block-cat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Aradeid\FlarumReferences;

use Flarum\Extend;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Formatter)
        ->configure(function(Configurator $config) {
            $config->BBCodes->addCustom(
                '[ref id={TEXT1}]{TEXT2}[/ref]',
                '<a href="#{TEXT1}">[{TEXT2}]</a>'
            );
            $config->BBCodes->addCustom(
                '[reference id={TEXT1} type={TEXT3?}]{TEXT2}[/reference]',
                '<span id="{TEXT1}" type="{@type}">{TEXT2}</span>'
            );
        }),
];
