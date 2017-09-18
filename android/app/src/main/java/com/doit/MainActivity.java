package com.doit;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import android.view.KeyEvent;
import com.github.kevinejohn.keyevent.KeyEventModule;
import org.devio.rn.splashscreen.SplashScreen;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "doit";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

    @Override
      public boolean onKeyDown(int keyCode, KeyEvent event) {
        KeyEventModule.getInstance().onKeyDownEvent(keyCode);
        super.onKeyDown(keyCode, event);
        return true;
      }

      @Override
      public boolean onKeyUp(int keyCode, KeyEvent event) {
        KeyEventModule.getInstance().onKeyUpEvent(keyCode);
        super.onKeyUp(keyCode, event);
        return true;
      }
}
