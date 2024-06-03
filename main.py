my_display = {'1920x1080', '2560x1440', '3480x2160'}
mobile_display = {'1920x1080', '1260x720', '920x600'}

print(my_display.intersection(mobile_display))
print(mobile_display.union(my_display))
print(mobile_display.issubset(my_display))
