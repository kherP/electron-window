/**
 * Copyright (c) 2021, Guasam
 *
 * This software is provided "as-is", without any express or implied warranty. In no event
 * will the authors be held liable for any damages arising from the use of this software.
 * Read the LICENSE file for more details.
 *
 * @author  : guasam
 * @project : Electron Window
 * @package : Window Titlebar (Component)
 */

import React from 'react';
import './Titlebar.less';

type Props = {
  title: string;
  icon?: string;
};

const SimpleTitlebar: React.FC<Props> = (props: Props) => {
  return (
    <div className='window-titlebar'>
      {!!props.icon && (
        <section className='window-titlebar-icon'>
          <img src={props.icon} />
        </section>
      )}
      {!!props.title && <div className='window-title'>{props.title}</div>}
    </div>
  );
};

export default SimpleTitlebar;
