from django import forms


class CreateNewList(forms.Form):
    name = forms.CharField()
    # check = forms.BooleanField(required=False)
