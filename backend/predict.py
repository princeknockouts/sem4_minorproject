# -*- coding: utf-8 -*-
"""
Created on Sun Sep 12 14:44:20 2021

@author: princ
"""

from sklearn.utils import resample
from sklearn.preprocessing import LabelEncoder
from scipy import stats
from sklearn.model_selection import train_test_split
from keras.layers import Dense, Dropout, Flatten, Conv2D, MaxPool2D, BatchNormalization
from keras.models import Sequential
# used for converting labels to one-hot-encoding
from keras.utils.np_utils import to_categorical
import keras
from sklearn.metrics import confusion_matrix
import matplotlib.pyplot as plt
import numpy as np
from numpy import asarray
import pandas as pd
import os
from glob import glob
import seaborn as sns
from PIL import Image
import cv2
np.random.seed(42)
SIZE = 80

skin_df = pd.read_csv('HAM10000_metadata.csv')
model = Sequential()
model = Sequential()
model.add(Conv2D(256, (3, 3), activation="relu", input_shape=(SIZE, SIZE, 3)))
#model.add(BatchNormalization())
model.add(MaxPool2D(pool_size=(2, 2)))  
model.add(Dropout(0.3))

model.add(Conv2D(128, (3, 3),activation='relu'))
#model.add(BatchNormalization())
model.add(MaxPool2D(pool_size=(2, 2)))  
model.add(Dropout(0.3))

model.add(Conv2D(64, (3, 3),activation='relu'))
#model.add(BatchNormalization())
model.add(MaxPool2D(pool_size=(2, 2)))  
model.add(Dropout(0.3))
model.add(Flatten())

model.add(Dense(32))
model.add(Dense(7, activation='softmax'))
model.summary()

model.compile(loss='categorical_crossentropy', optimizer='Adam', metrics=['acc'])


#loading the model
print("Loading the model")
new_model = keras.models.load_model('300epochs_80x80_1000.h5')

le = LabelEncoder()
le.fit(skin_df['dx'])
LabelEncoder()

skin_df['label'] = le.transform(skin_df["dx"])
types = skin_df["dx"].unique()


image = Image.open('test.JPG').resize((80,80))
print(image.size)
output = asarray(image)
print(output)


preds = new_model.predict(output)
print(preds)
#new_model.summary()





