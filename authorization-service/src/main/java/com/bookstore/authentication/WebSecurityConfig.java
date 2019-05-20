package com.bookstore.authentication;

import com.bookstore.authentication.authenticators.UserAuthenticationProvider;
import com.bookstore.authentication.configs.JwtConfig;
import com.bookstore.authentication.filters.JWTAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Order(1)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserAuthenticationProvider userAuthenticationProvider;

    @Autowired
    JwtConfig jwtConfig;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(userAuthenticationProvider);
        auth.inMemoryAuthentication().withUser("admin").password("{noop}admin").roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
             http
                     .csrf().disable()
                     .authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .and()
                .httpBasic()
                .and()
                .addFilter(new JWTAuthenticationFilter(authenticationManager(),jwtConfig));
    }


}
