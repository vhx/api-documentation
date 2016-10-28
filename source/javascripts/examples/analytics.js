(function() {
  window.data = {};
  window.data.analytics = {
    income: {
      statement: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?&type=income_statement&to=today&site_id=1&from=2016-10-01&per_page=25"
          },
          "statement": {
            "href": "/admin/billing"
          }
        },
        "to": "2016-10-28",
        "from": "2016-10-01",
        "data": {
          "revenue": {
            "gross": {
              "products": [
                {
                  "title": "Product Title",
                  "growth": null,
                  "amount_cents": 0
                },
                {
                  "title": "Another Product Title",
                  "growth": null,
                  "amount_cents": 0
                },
              ],
              "total": {
                "growth": -0.686,
                "amount_cents": 1029421
              }
            }
          },
          "expenses": {
            "merchant_fees": {
              "growth": -0.686,
              "amount_cents": 47920
            },
            "share_fees": {
              "growth": -0.699,
              "amount_cents": 3590
            },
            "fixed_fees": {
              "growth": -0.685,
              "amount_cents": 106000
            },
            "coupons": {
              "growth": null,
              "amount_cents": 0
            },
            "fulfillments": {
              "growth": -0.636,
              "amount_cents": 22000
            },
            "free_copies": {
              "growth": null,
              "amount_cents": 0
            },
            "screeners": {
              "growth": null,
              "amount_cents": 0
            },
            "total": {
              "growth": -0.68,
              "amount_cents": 179510
            }
          },
          "net": {
            "growth": -0.687,
            "amount_cents": 849911
          }
        },
        "page": 1
      }
    },
    traffic: {
      aggregate: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?&type=traffic&to=today&site_id=1&from=1-month-ago&per_page=25"
          }
        },
        "to": "2016-10-28",
        "from": "2016-09-28",
        "data": {
          "geo": [
            {
              "country": {
                "code": "us",
                "name": "United States"
              },
              "visits": 64532,
              "units": 0,
              "amount_cents": 0,
              "conversion": 0
            },
            {
              "country": {
                "code": "ca",
                "name": "Canada"
              },
              "visits": 836,
              "units": 0,
              "amount_cents": 0,
              "conversion": 0
            },
            {
              "country": {
                "code": "gb",
                "name": "United Kingdom"
              },
              "visits": 833,
              "units": 0,
              "amount_cents": 0,
              "conversion": 0
            }
          ],
          "referrers": [
            {
              "referrer": "(direct)",
              "visits": 50403,
              "units": 0,
              "amount_cents": 0,
              "conversion": 0
            },
            {
              "referrer": "google.com",
              "visits": 7316,
              "units": 0,
              "amount_cents": 0,
              "conversion": 0
            },
            {
              "referrer": "facebook.com",
              "visits": 1293,
              "units": 0,
              "amount_cents": 0,
              "conversion": 0
            }
          ],
          "devices": [
            {
              "device": "windows",
              "visits": 31835
            },
            {
              "device": "macintosh",
              "visits": 16370
            },
            {
              "device": "ios",
              "visits": 13164
            },
            {
              "device": "android",
              "visits": 5619
            },
            {
              "device": "linux",
              "visits": 1108
            },
            {
              "device": "other",
              "visits": 769
            }
          ],
          "categories": [
            {
              "category": "direct",
              "visits": 50403
            },
            {
              "category": "search",
              "visits": 8776
            },
            {
              "category": "referral",
              "visits": 8299
            },
            {
              "category": "social",
              "visits": 1384
            }
          ],
          "totals": {
            "visits": 68862,
            "units": 2708,
            "amount_cents": 2243392,
            "conversion": 0.04
          },
          "to": "2016-10-28",
          "from": "2016-09-28"
        },
        "page": 1
      }
    },
    units: {
      timeSeries: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?by=day&from=2013-07-19&to=2013-07-20"
          }
        },
        "to": "2013-07-20",
        "from": "2013-07-19",
        "by": "day",
        "data": [
          {
            "timestamp": "2013-07-19 00:00:00",
            "products": [
              {
                "product_id": 1,
                "product_name": "My Movie",
                "fulfillment_method": {
                  "vhx_payments": {
                    "units": 66,
                    "amount_cents": 32934
                  },
                  "shopify_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "bigcommerce_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "ios_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "tvos_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "roku_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "android_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "other_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "free_coupons": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "free_copies": {
                    "units": 0,
                    "amount_cents": 0
                  }
                },
                "totals": {
                  "fulfillment": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "paid": {
                    "units": 66,
                    "amount_cents": 32934
                  },
                  "total": {
                    "units": 66,
                    "amount_cents": 32934
                  }
                },
                "total_units": 66
              }
            ],
            "fulfillment_method": {
              "vhx_payments": {
                "units": 77,
                "amount_cents": 48423
              },
              "shopify_api": {
                "units": 0,
                "amount_cents": 0
              },
              "bigcommerce_api": {
                "units": 0,
                "amount_cents": 0
              },
              "ios_api": {
                "units": 0,
                "amount_cents": 0
              },
              "tvos_api": {
                "units": 0,
                "amount_cents": 0
              },
              "roku_api": {
                "units": 0,
                "amount_cents": 0
              },
              "android_api": {
                "units": 0,
                "amount_cents": 0
              },
              "other_api": {
                "units": 0,
                "amount_cents": 0
              },
              "free_coupons": {
                "units": 1,
                "amount_cents": 0
              },
              "free_copies": {
                "units": 0,
                "amount_cents": 0
              }
            },
            "totals": {
              "fulfillment": {
                "units": 1,
                "amount_cents": 0
              },
              "paid": {
                "units": 77,
                "amount_cents": 48423
              },
              "total": {
                "units": 78,
                "amount_cents": 48423
              }
            },
            "total_units": 78
          },
          {
            "timestamp": "2013-07-20 00:00:00",
            "products": [
              {
                "product_id": 1,
                "product_name": "My Movie",
                "fulfillment_method": {
                  "vhx_payments": {
                    "units": 58,
                    "amount_cents": 28942
                  },
                  "shopify_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "bigcommerce_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "ios_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "tvos_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "roku_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "android_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "other_api": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "free_coupons": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "free_copies": {
                    "units": 0,
                    "amount_cents": 0
                  }
                },
                "totals": {
                  "fulfillment": {
                    "units": 0,
                    "amount_cents": 0
                  },
                  "paid": {
                    "units": 58,
                    "amount_cents": 28942
                  },
                  "total": {
                    "units": 58,
                    "amount_cents": 28942
                  }
                },
                "total_units": 58
              }
            ],
            "fulfillment_method": {
              "vhx_payments": {
                "units": 64,
                "amount_cents": 36936
              },
              "shopify_api": {
                "units": 0,
                "amount_cents": 0
              },
              "bigcommerce_api": {
                "units": 0,
                "amount_cents": 0
              },
              "ios_api": {
                "units": 0,
                "amount_cents": 0
              },
              "tvos_api": {
                "units": 0,
                "amount_cents": 0
              },
              "roku_api": {
                "units": 0,
                "amount_cents": 0
              },
              "android_api": {
                "units": 0,
                "amount_cents": 0
              },
              "other_api": {
                "units": 0,
                "amount_cents": 0
              },
              "free_coupons": {
                "units": 0,
                "amount_cents": 0
              },
              "free_copies": {
                "units": 0,
                "amount_cents": 0
              }
            },
            "totals": {
              "fulfillment": {
                "units": 0,
                "amount_cents": 0
              },
              "paid": {
                "units": 64,
                "amount_cents": 36936
              },
              "total": {
                "units": 64,
                "amount_cents": 36936
              }
            },
            "total_units": 64
          }
        ],
        "page": 1
      },
      aggregate: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?&type=units&to=2015-11-21&by=day&site_id=1&from=2015-08-01&per_page=25"
          }
        },
        "to": "2015-11-21",
        "from": "2015-08-01",
        "data": {
          "products": [
            {
              "product_id": 1,
              "product_name": "My Movie",
              "fulfillment_method": {
                "vhx_payments": {
                  "units": 842,
                  "amount_cents": 415758
                },
                "shopify_api": {
                  "units": 0,
                  "amount_cents": 0
                },
                "bigcommerce_api": {
                  "units": 0,
                  "amount_cents": 0
                },
                "ios_api": {
                  "units": 0,
                  "amount_cents": 0
                },
                "tvos_api": {
                  "units": 0,
                  "amount_cents": 0
                },
                "roku_api": {
                  "units": 0,
                  "amount_cents": 0
                },
                "android_api": {
                  "units": 0,
                  "amount_cents": 0
                },
                "other_api": {
                  "units": 0,
                  "amount_cents": 0
                },
                "free_coupons": {
                  "units": 3,
                  "amount_cents": 0
                },
                "free_copies": {
                  "units": 0,
                  "amount_cents": 0
                }
              },
              "totals": {
                "fulfillment": {
                  "units": 3,
                  "amount_cents": 0
                },
                "paid": {
                  "units": 842,
                  "amount_cents": 415758
                },
                "total": {
                  "units": 845,
                  "amount_cents": 415758
                }
              },
              "total_units": 845
            },
          ],
          "fulfillment_method": {
            "vhx_payments": {
              "units": 1495,
              "amount_cents": 1286606
            },
            "shopify_api": {
              "units": 0,
              "amount_cents": 0
            },
            "bigcommerce_api": {
              "units": 0,
              "amount_cents": 0
            },
            "ios_api": {
              "units": 0,
              "amount_cents": 0
            },
            "tvos_api": {
              "units": 0,
              "amount_cents": 0
            },
            "roku_api": {
              "units": 0,
              "amount_cents": 0
            },
            "android_api": {
              "units": 0,
              "amount_cents": 0
            },
            "other_api": {
              "units": 0,
              "amount_cents": 0
            },
            "free_coupons": {
              "units": 176,
              "amount_cents": 0
            },
            "free_copies": {
              "units": 0,
              "amount_cents": 0
            }
          },
          "totals": {
            "fulfillment": {
              "units": 176,
              "amount_cents": 0
            },
            "paid": {
              "units": 1495,
              "amount_cents": 1286606
            },
            "total": {
              "units": 1671,
              "amount_cents": 1286606
            }
          },
          "total_units": 1671,
          "to": "2015-11-21",
          "from": "2015-08-01"
        },
        "page": 1
      }
    },
    subscribers: {
      aggregate: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?by=month&from=2015-08-28&to=2015-11-28"
          }
        },
        "to": "2015-11-28",
        "from": "2015-08-28",
        "data": {
          "existing_paying_subscribers": 9781,
          "existing_free_trials": 372,
          "trend_metrics": {
            "free_trial_conversion": 0.76,
            "churn": 0.11
          }
        },
        "page": 1
      },
      timeSeries: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?by=month&from=2015-07-01&to=2015-09-30"
          }
        },
        "to": "2015-07-01",
        "from": "2015-09-30",
        "by": "month",
        "data": [
          {
            "free_trial_created": 1535,
            "free_trial_churn": 733,
            "free_trial_converted": 1158,
            "paying_created": 872,
            "paying_churn": 1040,
            "paused_created": 125,
            "paused_ended": 171,
            "timestamp": "2016-07-01 00:00:00",
            "existing_paying": 8585,
            "total_paying": 9575,
            "existing_free_trials": 1519,
            "total_free_trials": 1163,
            "trend_metrics": {
              "free_trial_conversion": 0.754,
              "subscriber_growth": 0.115,
              "free_trial_growth": 0.051,
              "churn": 0.109
            }
          },
          {
            "free_trial_created": 1331,
            "free_trial_churn": 665,
            "free_trial_converted": 983,
            "paying_created": 708,
            "paying_churn": 1335,
            "paused_created": 179,
            "paused_ended": 134,
            "timestamp": "2016-08-01 00:00:00",
            "existing_paying": 9575,
            "total_paying": 9931,
            "existing_free_trials": 1163,
            "total_free_trials": 846,
            "trend_metrics": {
              "free_trial_conversion": 0.739,
              "subscriber_growth": 0.037,
              "free_trial_growth": -0.133,
              "churn": 0.134
            }
          },
          {
            "free_trial_created": 1107,
            "free_trial_churn": 632,
            "free_trial_converted": 899,
            "paying_created": 487,
            "paying_churn": 1355,
            "paused_created": 252,
            "paused_ended": 127,
            "timestamp": "2016-09-01 00:00:00",
            "existing_paying": 9931,
            "total_paying": 9962,
            "existing_free_trials": 846,
            "total_free_trials": 422,
            "trend_metrics": {
              "free_trial_conversion": 0.812,
              "subscriber_growth": 0.003,
              "free_trial_growth": -0.168,
              "churn": 0.136
            }
          }
        ],
        "page": 1
      }
    },
    churn: {
      aggregate: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?from=2016-07-28&page=1&per_page=15&to=2016-10-28"
          }
        },
        "to": "2016-10-28",
        "from": "2016-07-28",
        "data": {
          "pause_reasons": {
            "reasons": [
              {
                "message": "Waiting for content.",
                "customer_id": 1,
                "user_email": "customer@icloud.com",
                "user_name": null,
                "occurred_at": "2016-10-10 00:52:40.535045"
              },
              {
                "message": "I don't have the money at the moment",
                "customer_id": 2,
                "user_email": "customer@email.com",
                "user_name": null,
                "occurred_at": "2016-10-06 19:25:11.643162"
              }
            ],
            "vacation": 62,
            "save_money": 291,
            "other": 30,
            "wait_content": 157
          },
          "cancellation_reasons": {
            "reasons": [
              {
                "message": "Will come back soon!",
                "customer_id": 5,
                "user_email": "customer@gmail.com",
                "user_name": null,
                "occurred_at": "2016-10-09 20:11:25.711093"
              },
              {
                "message": "I am a college student and have no money.",
                "customer_id": 3,
                "user_email": "customer@yahoo.com",
                "user_name": null,
                "occurred_at": "2016-10-08 12:26:03.19079"
              }
            ],
            "high_price": 773,
            "other": 841
          },
          "reasons_total": 304,
          "reasons_count": 15
        },
        "page": 1
      },
      timeSeries: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?by=month&from=2016-09-28&to=2016-10-28"
          }
        },
        "to": "2016-10-28",
        "from": "2016-09-28",
        "by": "month",
        "data": [
          {
            "timestamp": "2016-09-01 00:00:00",
            "pause_reasons": {
              "reasons": [
                {
                  "message": "Not in my budget",
                  "customer_id": 40,
                  "user_email": "customer@site.com",
                  "user_name": null,
                  "occurred_at": "2016-09-25 02:44:11.83774"
                }
              ],
              "other": 9,
              "save_money": 115,
              "vacation": 26,
              "wait_content": 77
            },
            "cancellation_reasons": {
              "reasons": [
                {
                  "message": "I want to subscribe at a later time.",
                  "customer_id": 45,
                  "user_email": "customer@mail.com",
                  "user_name": null,
                  "occurred_at": "2016-09-29 04:41:25.925661"
                },
                {
                  "message": "No longer uses it ",
                  "customer_id": 50,
                  "user_email": "customer@media.com",
                  "user_name": null,
                  "occurred_at": "2016-09-26 17:06:53.310888"
                }
              ],
              "high_price": 298,
              "other": 325
            }
          },
          {
            "timestamp": "2016-10-01 00:00:00",
            "pause_reasons": {
              "reasons": [
                {
                  "message": "Nothing good at the moment. ",
                  "customer_id": 55,
                  "user_email": "customer@softbank.com",
                  "user_name": null,
                  "occurred_at": "2016-10-02 03:08:48.462157"
                }
              ],
              "wait_content": 15,
              "vacation": 8,
              "save_money": 38,
              "other": 5
            },
            "cancellation_reasons": {
              "reasons": [
                {
                  "message": "Not watching shows as often as I thought",
                  "customer_id": 60,
                  "user_email": "customer@outlook.com",
                  "user_name": null,
                  "occurred_at": "2016-10-01 21:40:41.746744"
                }
              ],
              "high_price": 82,
              "other": 87
            }
          }
        ],
        "page": 1
      }
    },
    video: {
      aggregate: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?from=2013-03-05&to=2016-10-28&type=video&video_id=1"
          }
        },
        "to": "2016-10-28",
        "from": "2013-10-28",
        "type": "video",
        "video_id": 1,
        "data": [
          {
            "plays": "2352",
            "finishes": "440",
            "seconds": "2241970"
          }
        ],
        "page": 1
      },
      timeSeries: {
        "_links": {
          "self": {
            "href": "https://api.vhx.tv/analytics?by=day&from=2016-10-26&to=2016-10-28&type=video&video_id=1"
          }
        },
        "to": "2016-10-28",
        "from": "2016-10-26",
        "by": "day",
        "type": "video",
        "video_id": 1,
        "data": [
          {
            "interval_timestamp": "2016-10-26 00:00:00",
            "plays": "2",
            "seconds": "930",
            "finishes": "0"
          },
          {
            "interval_timestamp": "2016-10-27 00:00:00",
            "plays": "7",
            "seconds": "2220",
            "finishes": "1"
          },
          {
            "interval_timestamp": "2016-10-28 00:00:00",
            "plays": "3",
            "seconds": "90",
            "finishes": "0"
          }
        ],
        "page": 1
      }
    }
  };
})(window);
