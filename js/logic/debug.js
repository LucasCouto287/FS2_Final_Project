// Dependencies:
//

var debug = new function() {
    this.my_wallet_info;
    this.settings;

    this.portfolio_balances_refresh_obj = $("#next-portfolio-balances-refresh");
    this.portfolio_metrics_refresh_obj = $("#next-portfolio-metrics-refresh");
    this.tickers_refresh_obj = $("#next-tickers-refresh");

    this.GetData = function(){
        this.my_wallet_info = Database.my_wallet_info;
        this.settings = Database.settings;
    }

    this.UpdateAboutMeInfo = function(){
        this.portfolio_balances_refresh_obj.text("");
    }

    this.Init = function(){
        this.GetData();

        this.UpdateAboutMeInfo();

        console.log("PortfolioJS: module initialized");
    }

    this.Init();
}