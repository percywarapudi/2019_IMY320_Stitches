package com.example.first;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Intent;
import android.widget.TextView;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.MalformedURLException;
import java.net.HttpURLConnection;

import javax.net.ssl.HttpsURLConnection;



public class SecondActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);



        TextView title = (TextView) findViewById(R.id.homeTitle1);
        title.setText("Activity One");
        Intent a = new Intent(this, MainActivity.class);

        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {

                switch (item.getItemId())
                {
                    case R.id.navigation_disc:

                        break;

                    case R.id.navigation_logout:
                        Intent a = new Intent(SecondActivity.this, MainActivity.class);
                        startActivity(a);
                        break;

                    case R.id.navigation_login:

                        break;
                }
                return false;
            }
        });
    }

    public void getMovies()
    {
        String str = "o";
        try {
            URL url = new URL("https://api.themoviedb.org/3/search/movie?api_key=5227be7523f950cb1d5b799b12dce835&language=en-US&query="+str+"&page=1&include_adult=false");

            try {
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();

                try
                {
                    InputStream results = new BufferedInputStream(connection.getInputStream());


                }
                finally
                {
                    connection.disconnect();
                }




            }
            catch(IOException e)
            {
                throw new RuntimeException();
            }
        }
        catch(MalformedURLException e)
        {
            throw new RuntimeException(e);
        }



    }



}