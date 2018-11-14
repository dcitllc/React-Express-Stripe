const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_live_MY_PUBLISHABLE_KEY"
    : "pk_test_SRYhymmyiSixMhVXOr4NCDzn";

export default STRIPE_PUBLISHABLE;
