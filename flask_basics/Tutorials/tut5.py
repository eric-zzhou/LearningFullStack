from flask import Flask, redirect, url_for, render_template, request, session, flash
from datetime import timedelta

app = Flask(__name__)
app.secret_key = "alji212304"
# app.permanent_session_lifetime = timedelta(minutes=5)


@app.route("/")
def home():
    return render_template("index.html", content=["check", "check2", "hi"])


# Get and Post
@app.route("/login/", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        # session.permanent = True
        session["user"] = request.form["nm"]
        flash("Login Successful!")
        return redirect(url_for("user"))
    else:
        if "user" in session:
            flash("Already logged in")
            return redirect(url_for("user"))
        return render_template("login.html")


@app.route("/user/")
def user():
    if "user" in session:
        return render_template("user.html", user=session["user"])
    else:
        flash("You are not logged in.")
        return redirect(url_for("login"))


@app.route("/logout/")
def logout():
    if "user" in session:
        flash(f"You have been logged out, {session['user']}!", "info")
    session.pop("user", None)
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(debug=True)
