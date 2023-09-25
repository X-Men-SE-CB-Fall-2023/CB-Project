package edu.ucmo.cbbackend.config;

import edu.ucmo.cbbackend.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.configurers.userdetails.DaoAuthenticationConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@EnableWebSecurity
@Configuration
public class SecurityConfig {





        @Bean
        public UserDetailsService userDetailsService() {
            return new UserDetailsService();
        }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationConfigurer daoAuthenticationConfigurer() {
            DaoAuthenticationConfigurer dao = new DaoAuthenticationConfigurer(userDetailsService());
            dao.passwordEncoder(passwordEncoder());

            return dao;

    }


    @Bean()
    @Order(Ordered.HIGHEST_PRECEDENCE)
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf(csrf -> csrf.disable())
                .formLogin(withDefaults()) // force form login for all requests
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/swagger-ui/**").permitAll() // permit all requests to swagger-ui
                        .requestMatchers("/v3/api-docs/**").permitAll()
                        .requestMatchers("/login").permitAll()
                        .requestMatchers("/user/**").permitAll()
                        .requestMatchers("/user").permitAll() // permit all requests to login
                        .anyRequest().authenticated() // all other requests require authentication
                )

                .build();

    }


}


