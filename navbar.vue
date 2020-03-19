<template>
<b-navbar id="navbar" class="navbar is-fixed-top">
        <template slot="brand">
          <b-navbar-item :to="{ path: '/' }" tag="router-link">
            <p>ANIBESAM</p>
          </b-navbar-item>
        </template>
        <template slot="start" class="navbar-start">
          <div slot="trigger" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">
              For Developers
            </a>
            <div class="navbar-dropdown is-boxed">
              <nuxt-link to="/products" class="navbar-item">
                Join Team Wiseplus
              </nuxt-link>
              <nuxt-link to="/products" class="navbar-item">
                Manage my Account
              </nuxt-link>
            </div>
          </div>
          <div slot="trigger" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">
              For Businesses
            </a>
            <div class="navbar-dropdown is-boxed">
              <nuxt-link to="/products" class="navbar-item">
                UI and Ux
              </nuxt-link>
              <nuxt-link to="/products" class="navbar-item">
                Software Development
              </nuxt-link>
              <nuxt-link to="/products" class="navbar-item">
                Penetration Testing
              </nuxt-link>
            </div>
          </div>
          <div slot="trigger" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">
              Company
            </a>
            <div class="navbar-dropdown is-boxed">
              <nuxt-link to="/about" class="navbar-item">
                About Wiseplus
              </nuxt-link>
              <nuxt-link to="/clients" class="navbar-item">
                Customers
              </nuxt-link>
              <nuxt-link to="/career" class="navbar-item">
                Careers
              </nuxt-link>
            </div>
          </div>
          <div slot="trigger" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">
              Pricing
            </a>
          </div>
        </template>
        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <span class="navbar-item level-right">
                <nuxt-link
                  to="/login"
                  class="button is-link pivotbutton is-rounded"
                >
                  <span style="font-size:17px;">Log In</span>
                </nuxt-link>
              </span>
              <span class="navbar-item level-right">
                <nuxt-link
                  to="/get_started"
                  class="button is-success pivotbutton is-rounded"
                >
                  <span style="font-size:17px;">Sign Up</span>
                </nuxt-link>
              </span>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
      </template>
      
